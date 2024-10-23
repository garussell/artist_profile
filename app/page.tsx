import Header from './header/header';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <h1>Welcome to the Band Site</h1>
        <p>
          This is the home page of the band site. You can find information about
          the band, upcoming shows, photos, videos, and more.
        </p>
      </main>
    </div>
  );
}
