const ButtonList = () => {
  return (
    <div className="flex gap-5">
      <button className="h-9 rounded-lg bg-black px-3 text-white">All</button>
      <button className="h-9 rounded-lg border border-black bg-transparent px-3 text-black">
        Music
      </button>

      <button className="h-9 rounded-lg border border-black bg-transparent px-3 text-black">
        Jukebox
      </button>
    </div>
  );
};

export default ButtonList;
