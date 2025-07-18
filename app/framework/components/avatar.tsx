import Image from "next/image";

function Avatar({ data }: { data: { name: string; avatar: string } }) {
   return (
      <>
         <Image
            priority
            className="rounded-full"
            alt={data.name}
            src={data.avatar}
            width={96}
            height={96}
         />
         <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
      </>
   );
}

export default Avatar;
