
export default function Home() {
  return (
    <main>
      <h1 className="text-center pt-24">Hello Next JS</h1>
      <User name="Usman"/>
      <User name="Tufail"/>
      <User name="Ahmad"/>
      <User name="Sufyan"/>
    </main>
  );
}

const User = (props) => {
  return (
    <div>
        <h1 className="text-center">{props.name}</h1>
    </div>
  )
}
