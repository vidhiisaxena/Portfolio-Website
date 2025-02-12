import { CONTACT } from "../constants";
import {motion} from "framer-motion";
const contact = () => {
  return (
    <div className="border-b border-zinc-50 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Contact
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-4 text-zinc-500 text-justify max-w-lg lg:max-w-xl mx-auto text-center text-lg lg:text-lg leading-relaxed lg:leading-snug"
        >
          {CONTACT.description}
        </motion.p>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:1}}>
        <a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          mailto="vidhiisaxena076@gmail.com"
        >
          {CONTACT.email}
        </a>
        </motion.div>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
      </div>
    </div>
  );
};

export default contact;
