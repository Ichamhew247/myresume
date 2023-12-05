function TicTacToeGameData() {
  return (
    <>
      <main className="w-[300px]  flex flex-col gap-4">
        <div className=" mt-8 text-[24px]">Tic Tac Toe Game</div>
        <div className="gap-3 flex flex-col">
          <ol>Features</ol>
          <li>Google Login</li>
          <li> Guide or How to Play</li>
          <li>Resize the Board</li>
          <li>Turn Sound On/Off</li>
          <li>Timed Games</li>
        </div>

        {/* <div>React Context API, Local Storage, Tailwind</div> */}
        {/* <div className="w-[300px] bg-black text-white text-center p-2 cursor-pointer hover:text-lg ">
          Watch the video review
        </div> */}
      </main>
    </>
  );
}

export default TicTacToeGameData;
