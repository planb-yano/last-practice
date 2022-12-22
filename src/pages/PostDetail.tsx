import { css } from "@emotion/react";
import Detail from "../components/Detail";
import CircleButton from "../components/CircleButton";
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
import { useMutation, useQuery, useQueryClient } from "react-query";

type Params = {
  postId: string;
};

type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const PostDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { postId } = useParams<Params>();
  const getPosts = () => {
    const post = axios
      .get(`http://localhost:18080/v1/note/${postId}`)
      .then((response) => response.data);
    return post;
  };
  const { data } = useQuery<Post, Error>("post", getPosts);

  const queryClient = useQueryClient();

  const deletePostMutation = useMutation(
    (id: string) =>
      axios.delete<Post>(`http://localhost:18080/v1/note/${postId}`),
    {
      onSuccess: (res, variables) => {
        const previousPosts = queryClient.getQueryData<Post[]>("posts");
        if (previousPosts) {
          queryClient.setQueryData<Post[]>(
            "posts",
            previousPosts.filter((post) => post.id === variables)
          );
        }
      },
    }
  );

  const onClickDelete = (post: string) => {
    deletePostMutation.mutate(post);
    window.location.href = "/";
  };
  return (
    <div css={styles.base}>
      {data && (
        <Detail
          title={data.title}
          date={data.createdAt.split("T")[0]}
          description={data.content}
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
