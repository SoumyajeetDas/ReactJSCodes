const Sidebar = () => {
  return (
    <div className="flex h-full flex-col gap-4 p-3 shadow-lg">
      <div>
        <p className="font-bold">Subscriptions</p>
        <ul>
          <li className="p-2 hover:bg-gray-200">Home</li>
          <li className="p-2 hover:bg-gray-200">Shorts</li>
          <li className="p-2 hover:bg-gray-200">Subscriptions</li>
        </ul>
      </div>
      <div>
        <p className="font-bold">Watch Later</p>
        <ul>
          <li className="p-2 hover:bg-gray-200">Home</li>
          <li className="p-2 hover:bg-gray-200">Shorts</li>
          <li className="p-2 hover:bg-gray-200">Subscriptions</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
