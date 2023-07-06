"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      stagerChildren: 0.3,
    },
  },
};

const paragraph = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Home() {
  return (
    <>
      <div className="mx-auto lg:container px-4 lg:px-0">
        <motion.section
          className="pb-12 md:pb-20"
          variants={variants}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-3xl md:text-5xl text-center">Tailwind CSS</h1>

          <div className="flex flex-col gap-10 mt-10 md:flex-row">
            <div className="flex flex-col-reverse gap-4 md:flex-col md:w-1/2 justify-between ">
              <motion.p variants={paragraph} initial="hidden" animate="show">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus natus maxime
                perspiciatis deleniti recusandae sequi libero impedit, facere architecto! Omnis
                nihil voluptatum est vel quam dolor. Quisquam saepe alias laborum atque veniam?
              </motion.p>
              <Image className="max-h-80" src="/top1.jpg" alt="" width={640} height={441} />
            </div>

            <div className="flex flex-col-reverse gap-4 md:flex-col md:w-1/2 justify-between ">
              <motion.p variants={paragraph} initial="hidden" animate="show">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusamus,
                laborum recusandae doloremque ipsa magni cumque deleniti. Aliquam corrupti corporis
                in autem?
              </motion.p>
              <Image className="max-h-80" src="/top2.jpg" alt="" width={640} height={427} />
            </div>
          </div>
        </motion.section>

        <motion.section className="pb-12" variants={variants} initial="hidden" animate="show">
          <h2>Our Specialization</h2>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 w-10/12 mx-auto">
              <h3>Corporate Compilance</h3>
              <motion.p variants={paragraph} initial="hidden" animate="show" className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed autem ab, dolorem at,
                repellat eveniet similique, consequuntur in neque voluptatem quis illo! Aspernatur
                at iste error. Nisi soluta iure, obcaecati at omnis, consectetur tempore quasi
                quidem vel laborum temporibus adipisci.
              </motion.p>
              <Button href="/about">READ MORE</Button>
            </div>

            <div className="flex flex-col gap-4 w-10/12 mx-auto">
              <h3>Corporate Compilance</h3>
              <motion.p variants={paragraph} initial="hidden" animate="show" className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati adipisci
                consectetur magni rerum similique debitis dolor voluptas molestias, nesciunt
                molestiae non, ad, quod nihil omnis cumque laudantium modi perferendis et quaerat
                tenetur.
              </motion.p>
              <Button href="/company">READ MORE</Button>
            </div>

            <div className="flex flex-col gap-4 w-10/12 mx-auto">
              <h3>Corporate Compilance</h3>
              <motion.p variants={paragraph} initial="hidden" animate="show" className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsa aperiam culpa
                molestias molestiae. Maxime voluptatem corrupti nam iure odit nulla temporibus vel
                voluptate dolores neque dolorem aut ullam quam numquam, explicabo qui nihil. Officia
                commodi ut sed eius harum amet maiores quia dignissimos doloribus illo facilis
                praesentium asperiores, odio tempore repellat quasi ipsa provident quos?
              </motion.p>
              <Button href="/recruit">READ MORE</Button>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
