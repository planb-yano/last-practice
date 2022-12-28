import { css } from "@emotion/react";
import Detail from "@/components/Detail";
import CircleButton from "@/components/CircleButton";
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
import SquareButton from "@/components/SquareButton";
import { useMutation, useQueryClient } from "react-query";
import type { Params } from "@/types/app";
import apiNote from "@/apis/apiNote";
import usePost from "@/hooks/usePost";

const PostDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { postId } = useParams<Params>();

  const { data, error } = usePost(postId);

  const queryClient = useQueryClient();

  const deletePostMutation = useMutation(
    (id: string) => apiNote.deleteNote.delete(postId),
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
          <div css={styles.detail}>
            <Detail
              title={data.title}
              date={data.createdAt.split("T")[0]}
              description={data.content}
            ></Detail>
          </div>
          <div css={styles.button}>
            <CircleButton children="Delete" onClick={onOpen}></CircleButton>
            <CircleButton
              children="Edit"
              href={`/post/${postId}/edit`}
            ></CircleButton>
          </div>

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
    margin-top: 50px;
  `,
  button: css`
    margin-top: 60px;
    display: flex;
    gap: 20px;
    justify-content: flex-end;
  `,
};

export default PostDetail;
