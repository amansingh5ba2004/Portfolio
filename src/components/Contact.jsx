import { CONTACT } from "../constants"
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="pb-20 border-b border-neutral-900">
      <h2 
      className="my-10 text-4xl text-center">Get in Touch</h2>
      <div className="tracking-tighter text-center">
        <motion.p 
        whileInView={{opacity: 1 , x:0 }}
        initial={{opacity: 0 , x: -100 }}
        transition={{duration:1}}
        className="my-4">{CONTACT.address}</motion.p>
        <motion.p 
        whileInView={{opacity: 1 , x:0 }}
        initial={{opacity: 0 , x: 100 }}
        transition={{duration:1}}
        className="my-4">{CONTACT.phoneNo}</motion.p>
        <motion 
        href="#" className="border-b">
            {CONTACT.email}
        </motion>
      </div>
    </div>
  )
}

export default Contact
