import Hero from "@/components/Hero";
import Motion from "@/components/Motion";

export const metadata = {
  title: "About",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Motion>
        <Hero title="ABOUT" />
        <div>{children}</div>
      </Motion>
    </>
  );
}
