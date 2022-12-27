import { css } from "@emotion/react";
import Detail from "../components/Detail";
import CircleButton from "../components/CircleButton";
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
import type { Post } from "../types/app";
import type { Params } from "../types/app";
import apiProject from "../apis/apiProject";

const PostDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { postId } = useParams<Params>();
  const getPosts = () => {
    const post = apiProject.itemGet
      .get(postId)
      .then((response) => response.data);
    return post;
  };
  const { data, error } = useQuery<Post, Error>(["post", postId], getPosts, {
    enabled: !!postId,
  });

  const queryClient = useQueryClient();

  const deletePostMutation = useMutation(
    (id: string) => apiProject.itemDelete.delete(postId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["post", postId]);
      },
    }
  );

  const onClickDelete = (post: string) => {
    deletePostMutation.mutate(post);
    window.location.href = "/";
  };
  return (
    <div css={styles.base}>
      {error && <p>Error</p>}
      {data && (
        <>
          <Detail
            title={data.title}
            date={data.createdAt.split("T")[0]}
            description={data.content}
          ></Detail>
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
        </>
      )}
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
