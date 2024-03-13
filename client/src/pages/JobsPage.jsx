import useAuthGuard from "../hooks/useAuthGuard";

const JobsPage = () => {
  useAuthGuard();
  return <div>JobsPage</div>;
};
export default JobsPage;
