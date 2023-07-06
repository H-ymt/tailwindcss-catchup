import Image from "next/image";

type Props = {
  title: string;
};

export default function Hero({ title }: Props) {
  return (
    <div className="relative bg-blue-100 py-80">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-gray-80">
        {title}
      </h1>
    </div>
  );
}
