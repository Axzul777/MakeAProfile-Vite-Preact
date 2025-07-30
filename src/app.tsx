// import { useState } from 'preact/hooks'
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
import './app.css'
import { useState } from 'preact/hooks';

export function App() {

  const [session, setSession] = useState({});

  const onSubmit = (target: any) => {
    // console.log(typeof(target));
    target.preventDefault();
    const formData = new FormData(target.currentTarget);
    setSession(formData);
    console.log(formData);
    target.currentTarget.reset();

  }

  return (
    <main className={"min-h-screen flex justify-center items-center"}>
      <div className={"grid lg:grid-cols-2 lg:grid-rows-none w-300 lg:h-200 m-3 rounded-4xl border-2 p-2"}>
        <div className={"m-3 flex justify-center items-center"}>
          <form className={"flex flex-col gap-y-px w-100"} onSubmit={onSubmit}>
            <label for="full-name" id="full-name">Full Name</label>
            <input type='text' placeholder={"What should we call you?"}
              className={"rounded border-2 p-3"} name="full-name" />
            <label for="email" id="email">Email</label>
            <input type='email' placeholder={"example@gmail.com"} className={"rounded border-2 p-3"} name="email"/>
            <br />
            <label for="pswd" id="pswd">Enter Password</label>
            <input type='password' id="pswd" placeholder={"XXXXXXXX"} className={"rounded border-2 p-3"} name="password"/>
            <label for="pswd-confirm">Confirm Password</label>
            <input type='password' id="pswd-confirm" placeholder={"XXXXXXXX"} className={"rounded border-2 p-3"} name="confirmed-password"/>
            <br />
            <button className={"bg-sky-500 rounded p-3 mt-4 font-bold text-slate-200"} onSubmit={onSubmit}>Update Profile</button>
          </form>
        </div>
        <div className={"\bg-gray-500 grid grid-row-2 justify-center p-4 flex-col"}>
          <div className={"flex flex-col text-center gap-5 m-20 items-center"}>
            <div className={"flex rounded-full w-40 h-40 bg-green-300 items-center justify-center"}>
              <div className={"flex rounded-full w-30 h-30 bg-white absolute"} />
              <div className={"text-5xl text-slate-300 font-bold z-1"}>65%</div>
            </div>
            <div className={"text-2xl text-emerald-400 font-bold"}>Profile Completeness</div>
          </div>
          <div className={"flex justify-center items-center"}>
            <div className={"bg-gray-300 h-90 w-100 p-10 rounded-3xl flex flex-col gap-4"}>
              <div className={"text-1xl line-through text-gray-400"}>Crete Acount</div>
              <div className={"text-1xl line-through text-gray-400"}>Update Roadmap Progress</div>
              <div className={"text-1xl line-through text-gray-400"}>Setup Public Profile</div>
              <div className={"text-1xl text-gray-600"}>Complete your first project</div>
              <div className={"text-1xl text-gray-600"}>Invite your Friends</div>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}
