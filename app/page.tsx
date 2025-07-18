import { get } from '@vercel/edge-config';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { redirect } from 'next/navigation';
import Avatar from './framework/components/avatar';
import LinkCard from './framework/components/link_card';
import { Data } from './framework/models';
import { GitHubIcon, InstagramIcon, LinkedInIcon, TikTokIcon, TwitterIcon } from './icons';

export const dynamic = 'force-dynamic',
  runtime = 'edge';

export default async function HomePage() {
  const data: Data | undefined = await get('njmbio');

  if (!data) {
    // not working yet https://github.com/vercel/next.js/issues/44232
    redirect('https://njmbio.vercel.app/');
  }

  return (
    <main className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">

      <Avatar data={{ name: data.name, avatar: data.avatar }} />

      <p className="text-white mb-7">Links to my social media and services I offer.</p>

      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}

      <div className="flex items-center gap-4 mt-8 text-white">
        {data.socials.map((social) => (
          <a
            aria-label={`${social.title} link`}
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-mint text-mint fill-current">
              {social.href.includes('twitter') ? (
                <TwitterIcon /*color={social.color}*/ />
              ) : social.href.includes('github') ? (
                <GitHubIcon /*color={social.color}*/ />
              ) : social.href.includes('instagram') ? (
                <InstagramIcon /*color={social.color}*/ />
              ) : social.href.includes('linkedin') ? (
                <LinkedInIcon /*color={social.color}*/ />
              ) : social.href.includes('tiktok') ? (
                <TikTokIcon /**/ />
              ) : null}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
