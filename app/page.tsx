import StateSwitch from "@/components/StateSwitch";

export default function Home() {
  return (
    <div className="m-auto flex w-60 flex-col justify-items-center gap-4">
      <h1>Jobit</h1>
      <StateSwitch />
    </div>
  );
}
