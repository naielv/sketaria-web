export default function Header({ title }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <a href="/api/auth/login">Login</a>
    </>
  );
}
