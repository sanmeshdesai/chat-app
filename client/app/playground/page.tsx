import Logo from "@/components/common/Logo";
import { Input, Button, Divider } from "@/components/ui";

export default function Playground() {
  return (
    <div className="min-h-screen bg-background p-12">

 <Logo />

      <Logo size={28} />

      <Logo size={56} />

      <Logo showText={false} />

      <div className="bg-surface rounded-2xl p-6">
        <Logo />
      </div>

      <div className="mx-auto flex max-w-md flex-col gap-6">
        <Input
  label="Email"
  placeholder="Enter your email"
/>

<Input
  label="Password"
  type="password"
  placeholder="Password"
/>

<Input
  label="Email"
  error="Email is required"
/>

<Input
  label="Disabled"
  disabled
  placeholder="Disabled"
/>
<Divider text="or continue with" />

        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="ghost">
            Ghost
          </Button>

          <Button variant="danger">
            Danger
          </Button>
        </div>
      </div>
    </div>
  );
}