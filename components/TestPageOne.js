import { supabase } from '../utils/supabaseClient'

export default function Auth() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async () => {
    const form = {
      username: username,
      password: password,
    };
    
    const { data, error } = await supabase
      .from("responses")
      .insert([{ response: form }]);
      error ? console.log(error) : console.log(data);
  };
  return (
    <div className="min-h-screen min-w-screen bg-purple-500 flex justify-center items-center">
      <form className="p-8 bg-white shadow rounded flex flex-col justify-center items-center">
        <input
          type="text"
          className="m-2 outline-none py-2 px-4 border-2 border-black-200 rounded focus:border-blue-400 text-black-300 text-xl"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          className="m-2 outline-none py-2 px-4 border-2 border-black-200 rounded focus:border-blue-400 text-black-300 text-xl"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="m-1 p-2 bg-green-500 text-white font-medium text-xl grid place-items-center rounded">
          Submit
        </button>
      </form>
    </div>
  )
}