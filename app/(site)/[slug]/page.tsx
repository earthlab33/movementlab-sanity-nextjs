// import { getPage } from '../../../sanity/sanity-utils';
import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';

type Props = {
    params: { slug: string }
}

export default async function Page({params}: Props) {
  const page = await getPage(params.slug);


return (
    <div className="max-w-6xl pt-10 mx-auto">
        <h1 className="text-4xl font-extrabold text-center mt-12">{page.title}</h1>
        <div className="mt-5 text-lg text-black"><PortableText value={page.content} /></div>
    </div>
)
}
