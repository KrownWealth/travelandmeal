import { useRouter } from 'next/router';

const UserProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <section className="py-40">
      <h1>Profile</h1>
      <hr />

      <p className="text-4xl">
        Profile page <span>{id}</span>
      </p>
    </section>
  );
};

export default UserProfile;
