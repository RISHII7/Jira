import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  gap-[100px]">
      <Button variant="primary"> Primary </Button>
      <Button variant="secondary"> Secondary </Button>
      <Button variant="destructive"> Destructive </Button>
      <Button variant="ghost"> Ghost </Button>
      <Button variant="muted"> Muted </Button>
      <Button variant="outline"> Outline </Button>
      <Button variant="teritary"> Teritrary </Button>
    </div>
  );
}
