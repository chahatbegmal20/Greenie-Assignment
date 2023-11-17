const Modal = ({ user, closeHandler }) => {
  return (
    <div
      className="absolute top-0 left-0 bottom-0 right-0 z-40 bg-transparent"
      onClick={() => closeHandler(null)}
    >
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-50 rounded-lg p-12 bg-slate-900 shadow-xl text-slate-100 flex flex-col gap-4">
        <h1 className="mb-2 text-2xl uppercase">Generated Report</h1>
        <p className="text-center bg-slate-800 p-2 rounded shadow">
          UserName : {user.username}
        </p>
        <p className="text-center bg-slate-800 p-2 rounded shadow">
          Email : {user.email}
        </p>
        <p className="text-center bg-slate-800 p-2 rounded shadow">
          Phone : {user.phone}
        </p>
      </div>
    </div>
  );
};
export default Modal;
