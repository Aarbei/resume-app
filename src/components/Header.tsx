function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blur-md bg-white/60 px-6 py-2">
      <div className="flex gap-120">
        <p className="text-gray-600">Alona Kolomyitseva</p>
        <div className="flex gap-5">
          <a className="text-gray-600">About me</a>
          <a className="text-gray-600">Projects</a>
          <a className="text-gray-600">Contact me</a>
        </div>
      </div>
    </header>
  );
}
export default Header;
