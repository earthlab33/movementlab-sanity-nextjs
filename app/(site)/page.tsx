import {getProjects} from '../../sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';


export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="grid mt-16">
      <div className="top-comment font-semibold text-slate-500 mx-auto">
        <p><span>FOR TENSION AND TRAUMA RELEASING EXERCISES (TRE®) OFFERED IN-PERSON AND ONLINE, <Link href="https://shop.movementlab.dance/collections/trauma-release-exercises" target="_blank" className="text-blue300 underline">
        CLICK HERE</Link></span></p>
      </div>
      
      <section
  class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img"
>
  <div class="absolute right-11">
    <Image src="https://movementlab.dance/wp-content/uploads/2021/01/MovementLab_FP_BW-150x150.png" width={150} height={150} alt="MovementLab Logo" className="right-4" />
  </div>
</section>

<div className="top-comment mx-auto mb-10">
<p><span className="text-2xl text-orange-600">MovementLab Class and Membership Offerings: </span></p>
      </div>
      <div className="max-w-6xl pt-10 mx-auto">
      {/* new card design */}
      <div className="grid overflow-hidden sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 grid-flow-row w-auto 2xl:h-auto 2xl:square">
      {projects.map((project) => (
      <div className="max-w-sm rounded drop-shadow-lg hover:drop-shadow-xl border text-center" key={project._id}>
        {project.image && (
  <Image className="w-full" src={project.image}
            alt={project.name}
            width={350}
            height={300} />
        )}
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{project.name}</div>
    <p className="text-gray-700 text-base">
    <PortableText value={project.content} />
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <Link href={`${project.url}`} target="_blank" rel="noreferrer"passHref class="px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" >
          Buy Now
        </Link>
  </div>
</div>
))}
</div>
</div>
      {/* end new card design */}
      <div className="mx-auto mb-10 mt-12 text-center">
<p><span className="text-4xl text-orange-600">Drop-In Classes:</span></p>
<p className="pb-10"><span className="text-2xl text-slate-500">Visit the calendar or CLICK HERE to register for drop-in before class begins!</span></p>
<p><span className="text-4xl text-orange-600">Questions? </span></p>
<p><span className="text-2xl text-slate-500">Visit the frequently asked questions (FAQ) page!</span></p>
      </div>
<section class="flex flex-wrap grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center h-auto  bg-fixed bg-black">
  <div className="flex-1 mx-10">
 <Image 
            src="https://d1hd3rokkj5cpu.cloudfront.net/wp-content/uploads/2020/01/31102911/POSTERCHILD-forTimeOut2.jpg"
            width="650"
            height="847"
            className="text-2xl font-bold text-grey-800 pl-12"
            alt="MovementLab Red Room"
          />
  </div>
  <div className="flex-1 mx-10 py-4">
<p className="pb-10"><span className="text-4xl text-slate-400">What is MovementLab?</span></p>
<p className="pb-10"><span className="text-2xl text-slate-400">MovementLab consists of dance/movement classes, yoga, massage, butoh, dance making, conscious listening, retreat, performances, music/sound education, the sharing and evolving of ideas.</span></p>
<p><span className="text-2xl text-slate-400">The mission is to mindfully explore the body, mind, spirit through yoga, dance, and creative expression leading to a more unified existence with ourselves, our human community and the natural world.</span></p>
  </div>
</section>
<section
  class="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover where-img"
>
  <div class="text-center">
    <h1 class="text-4xl font-bold text-white pb-10">Where and When</h1>
    <ul className="list-none">
    <li className="text-2xl text-white pb-10">Homebase Taos, New Mexico</li>
    <li className="text-2xl text-white pb-10">Online Live Yoga Classes</li>
    <li className="text-2xl text-white pb-10"> Massage Therapy</li>
    <li className="text-2xl text-white pb-10">Essential Massage</li>
    <li className="text-2xl text-white pb-10">824 Paseo del Pueblo Norte</li>
    <li className="text-2xl text-white pb-10">(or contact me directly)</li>
    <li className="text-2xl text-white">Contact for performance</li>
    </ul>
    <div className="mt-12">
    <Link href="/contact" rel="noreferrer" passHref className="px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700" >
          Contact MovementLab
        </Link>
        </div>
  </div>
</section>
    </main>
  )
}
