import Hero from "@/components/Hero";
import Motion from "@/components/Motion";

export const metadata = {
  title: "Company",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Motion>
        <Hero title="COMPANY" />
        <div>{children}</div>
      </Motion>
    </>
  );
}
