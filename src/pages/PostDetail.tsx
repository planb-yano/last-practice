import { css } from "@emotion/react";
import Detail from "../components/Detail";
import CircleButton from "../components/CircleButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import SquareButton from "../components/SquareButton";

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

type Params = {
  postId: string;
};

const PostDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [post, setPost] = useState<Post>();
  const { postId } = useParams<Params>();
  useEffect(() => {
    axios
      .get(`http://localhost:18080/v1/note/${postId}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  }, [postId]);
  const onClickDelete = () => {
    axios
      .delete(`http://localhost:18080/v1/note/${postId}`)
      .then((response) => console.log(response));
    window.location.href = "/";
  };
  return (
    <div css={styles.base}>
      {post && (
        <Detail
          title={post.title}
          date={post.createdAt.split("T")[0]}
          description={post.content}
        ></Detail>
      )}
      <CircleButton children="Delete" onClick={onOpen}></CircleButton>
      <CircleButton
        children="Edit"
        href={`/post/${postId}/edit`}
      ></CircleButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>本当に削除しますか？</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <SquareButton onClick={onClickDelete}>削除</SquareButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

const styles = {
  base: css`
    width: 70%;
    margin: 0 auto;
  `,
  detail: css`
    margin-top: 300px;
  `,
};

export default PostDetail;
