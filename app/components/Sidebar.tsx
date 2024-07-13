export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col justify-start items-start bg-gray-300 p-4">
      <h1 className="text-2xl font-bold mb-2">Side Nav</h1>
      <ul className="flex flex-col gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </aside>
  );
}
