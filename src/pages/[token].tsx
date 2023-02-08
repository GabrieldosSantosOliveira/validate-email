import ErrorAnimation from 'animations/error.json';
import SuccessAnimation from 'animations/success.json';
import Lottie from 'lottie-react';
import { GetServerSideProps } from 'next';
type ValidateEmailProps = {
  result: 'success' | 'error';
};
export default function ValidateEmail({ result }: ValidateEmailProps) {
  return (
    <div className="bg-cyan-900 flex justify-center items-center flex-col min-w-full min-h-screen px-3">
      {result === 'success' ? (
        <>
          <Lottie animationData={SuccessAnimation} />
          <h1 className="text-xl text-center font-medium font-['Poppins']">
            Email Confirmado com sucesso
          </h1>
        </>
      ) : (
        <>
          <Lottie
            animationData={ErrorAnimation}
            maxLength={100}
            className="w-auto h-80"
            width={100}
            height={100}
          />

          <h1 className="text-xl text-center font-medium font-['Poppins']">
            Erro ao confirmar email
          </h1>

          <p className="text-sm text-center font-medium font-['Poppins']">
            Tente novamente mais tarde ou entre em contato com o suporte
          </p>
        </>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      result: 's',
    },
  };
};
