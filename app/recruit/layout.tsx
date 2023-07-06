import Hero from "@/components/Hero";
import Motion from "@/components/Motion";

export const metadata = {
  title: "Recruit",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Motion>
        <Hero title="RECRUIT" />
        <div>{children}</div>
      </Motion>
    </>
  );
}
