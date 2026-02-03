function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-blur-md bg-white/60 shadow-xs px-6 py-4">
      <div className="flex justify-between">
        <p className="text-gray-600 mr-20">Alona Kolomyitseva</p>
        <div className="flex gap-10">
          <a className="text-gray-600">About me</a>
          <a className="text-gray-600">Projects</a>
          <a className="text-gray-600">Contact me</a>
        </div>
      </div>
    </header>
  );
}
export default Header;
