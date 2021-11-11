import { useRouter } from "next/router";

const useParams = () => {
  const router = useRouter();

  return {
    teamId: router.query?.teamId ?? null,
    driverId: router.query?.driverId ?? null,
  };
};

export { useParams };
