/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot, b as createAstro, a as addAttribute, e as renderComponent, f as renderHead } from '../chunks/astro/server_CKbjlj5d.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$ShadedBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ShadedBox;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> ${label && renderTemplate`<div class="-mb-1 flex flex-col space-y-1.5 p-6 py-0"> <h3 class="text-base font-normal leading-none tracking-tight"> <span class="relative z-10 -mx-2 bg-white px-2"> ${label} </span> </h3> </div>`} <div class="relative border-2 bg-white border-border-contrast p-3 md:p-6 after:bg-dotted after:absolute after:-bottom-2 after:-right-2 after:left-2 after:top-2 after:-z-10 after:content-['']"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/vee/Documents/Portfolios/portfolio_v2/src/components/ui/shaded-box.astro", undefined);

const $$Astro$2 = createAstro();
const $$Box = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Box;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> ${label && renderTemplate`<div class="-mb-1 flex flex-col space-y-1.5 p-6 py-0"> <h3 class="text-base font-normal leading-none tracking-tight"> <span class="relative z-10 -mx-2 bg-white px-2"> ${label} </span> </h3> </div>`} <div class="relative border-2 bg-white border-border-contrast p-3 md:p-6"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/vee/Documents/Portfolios/portfolio_v2/src/components/ui/box.astro", undefined);

const $$Astro$1 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank">${renderSlot($$result, $$slots["default"])}</a>`;
}, "/home/vee/Documents/Portfolios/portfolio_v2/src/components/ui/link.astro", undefined);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <p class="font-semibold text-lg">Vee</p> <p class="pt-4">
I'm an engineering student and self-taught developer based in Hyderabad, India. I love participating in hackathons and organising technical events as a part of community work.
</p> <div class="pt-4 flex flex-col gap-2 text-sm"> <div>
Reach out: <span> ${renderComponent($$result, "Link", $$Link, { "href": "mailto:curiousvee19@gmail.com" }, { "default": ($$result2) => renderTemplate`curiousvee19@gmail.com` })} or @vee.apk on Discord.
</span> </div> <div>
Find me: &nbsp;
<span> ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/veesesh" }, { "default": ($$result2) => renderTemplate`GitHub` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://x.com/vee19twt" }, { "default": ($$result2) => renderTemplate`Twitter` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://www.linkedin.com/in/vee19/" }, { "default": ($$result2) => renderTemplate`LinkedIn` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://drive.google.com/file/d/1pYluFBZOlUWLivRBnZRZxeOoa2C4zr-w/view?usp=sharing" }, { "default": ($$result2) => renderTemplate`Resume` })} </span> </div> </div> </div>`;
}, "/home/vee/Documents/Portfolios/portfolio_v2/src/components/about-me.astro", undefined);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-6"> <div class="flex flex-col gap-2"> <p> ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/Sushants-Git/team-gap" }, { "default": ($$result2) => renderTemplate`NAASH- Not another AI shell` })} </p> <p class="text-sm">
AI-powered terminal shell that enhances speed and efficiency through
            natural language interaction, clipboard and error log history.
</p> <p class="text-sm">
Participated as a team and won ${renderComponent($$result, "Link", $$Link, { "href": "https://devfolio.co/projects/yaash-yet-another-ai-shell-192b" }, { "default": ($$result2) => renderTemplate`HackThisFall 2024 Virtual` })} and received a prize of $1000 USD.
</p> <div></div> <p class="text-muted text-sm">Tech used: cli, ai</p> <p class="text-muted text-sm">
Links: ${renderComponent($$result, "Link", $$Link, { "href": "https://www.youtube.com/watch?v=6xZ1Gxxiu1U" }, { "default": ($$result2) => renderTemplate`Video` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/Sushants-Git/team-gap" }, { "default": ($$result2) => renderTemplate`GitHub` })} </p> </div> <div class="flex flex-col gap-2"> <p> ${renderComponent($$result, "Link", $$Link, { "href": "https://peerlist.io/sushantspeer/project/scratch-blogs" }, { "default": ($$result2) => renderTemplate`Scratch-Blogs` })} </p> <p class="text-sm">
Intelligent editor that allows users to write text using Markdown, draw flowcharts or diagrams on the spot, and upload images seamlessly. I Worked on the Backend of the application
</p> <div></div> <p class="text-muted text-sm">Tech used: react, typescript, gemini-api, azure vm, excalidraw npm</p> <p class="text-muted text-sm">
Links: ${renderComponent($$result, "Link", $$Link, { "href": "https://youtu.be/bJMj_w8W5Dk" }, { "default": ($$result2) => renderTemplate`Video` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/Sushants-Git/scratch-blogs" }, { "default": ($$result2) => renderTemplate`Frontend Codebase` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/veesesh/backend_scratchblogs" }, { "default": ($$result2) => renderTemplate`Backend Codebase` })} </p> </div> <div class="flex flex-col gap-2"> <p> ${renderComponent($$result, "Link", $$Link, { "href": "https://devpost.com/software/snippetsafe" }, { "default": ($$result2) => renderTemplate`Snippet-Safe` })} </p> <p class="text-sm">
Easy tool designed to efficient store and organize code snippets (bookmarking tool for code snippets)
</p> <p class="text-sm">
Participated as a team and won ${renderComponent($$result, "Link", $$Link, { "href": "https://frosthacks.devpost.com/" }, { "default": ($$result2) => renderTemplate`Frost Hacks 2024 In-Person Hackathon` })} and received a prize of 12,000 INR.
</p> <div></div> <p class="text-muted text-sm">
Tech used: react, mongodb, hugging face
</p> <p class="text-muted text-sm">
Links: ${renderComponent($$result, "Link", $$Link, { "href": "https://youtu.be/dL4a-QIyANA" }, { "default": ($$result2) => renderTemplate`Video` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/Sushants-Git/SnippetsSafe" }, { "default": ($$result2) => renderTemplate`GitHub` })} </p> </div> </section>`;
}, "/home/vee/Documents/Portfolios/portfolio_v2/src/components/projects.astro", undefined);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-6"> <div class="flex flex-col gap-2"> <p class="flex items-center gap-2"> ${renderComponent($$result, "Link", $$Link, { "href": "https://www.linkedin.com/company/kalakumbh/" }, { "default": ($$result2) => renderTemplate`KalaKumbh` })} <span class="text-muted text-xs inline-block">- 2023 June, 2 months</span> </p> <p class="text-muted text-sm">Flutter Developer Intern</p> <p class="text-sm">
Designed, developed, and maintained web and mobile application using Flutter
</p> </div> </section>`;
}, "/home/vee/Documents/Portfolios/portfolio_v2/src/components/experience.astro", undefined);

const $$Community = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-6"> <div class="flex flex-col gap-2"> <p class="flex items-center gap-2"> ${renderComponent($$result, "Link", $$Link, { "href": "https://event.codeday.org/en-US/hyderabad" }, { "default": ($$result2) => renderTemplate`CodeDay Hyderabad` })} <span class="text-muted text-xs inline-block">- 2022 July - 2024 December </span> </p> <p class="text-muted text-sm">Regional Manger and Volunteer</p> <p class="text-sm">
CodeDay is a worldwide event where student artists, programmers, musicians, actors, and writers get together to build apps and games. <br>
CodeDay Hyderabad has three editions, where I volunteered in the first two and led the third one as Regional Manger.
</p> </div> <div class="flex flex-col gap-2"> <p class="flex items-center gap-2"> ${renderComponent($$result, "Link", $$Link, { "href": "https://hackerabad.framer.website/" }, { "default": ($$result2) => renderTemplate`Hackerabad` })} <span class="text-muted text-xs inline-block">- 2022 April - Present </span> </p> <p class="text-muted text-sm">Lead and Mentor</p> <p class="text-sm">
Hackerabad is a student run developer community based in Hyderabad,India. My work involved in Managing and Organizing Student Events outside and in the college campus.
</p> </div> </section>`;
}, "/home/vee/Documents/Portfolios/portfolio_v2/src/components/community.astro", undefined);

function Design({ designImages }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const handleImageClick = (index) => {
    setImageIndex(index);
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-2 row-span-2 cursor-pointer", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: designImages[0].src,
          alt: designImages[0].alt,
          width: 600,
          height: 400,
          onClick: () => handleImageClick(0),
          className: "w-full h-full object-cover border border-border-contrast muted-image"
        }
      ) }),
      designImages.slice(1).map((image, index) => /* @__PURE__ */ jsx("div", { className: "relative cursor-pointer", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: image.src,
          alt: image.alt,
          width: 300,
          height: 200,
          onClick: () => handleImageClick(index + 1),
          className: "w-full h-full object-cover border border-border-contrast muted-image"
        }
      ) }, index))
    ] }) }) }),
    /* @__PURE__ */ jsx(
      ImageDialog,
      {
        isOpen,
        src: designImages[imageIndex].src,
        alt: designImages[imageIndex].alt,
        onClose: handleClose
      }
    )
  ] });
}
function ImageDialog({ isOpen, src, alt, onClose }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center px-6 bg-white/70 transition-opacity duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`,
      onClick: onClose,
      children: /* @__PURE__ */ jsx(ShadedBox, { children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "relative flex max-h-[90vh] max-w-6xl w-full items-center justify-center",
          onClick: (e) => {
            e.stopPropagation();
          },
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src,
              alt,
              className: "mx-auto h-auto max-h-[85vh] w-auto max-w-full object-contain"
            }
          )
        }
      ) })
    }
  );
}
function ShadedBox({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "relative border-2 bg-white border-border-contrast p-1 after:bg-dotted after:absolute after:-bottom-2 after:-right-2 after:left-2 after:top-2 after:-z-10 after:content-['']", children }) });
}

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const designImages = [
    { src: "/images/image-3.png", alt: "Design 1" },
    { src: "/images/image-2.png", alt: "Design 2" },
    { src: "/images/image-1.png", alt: "Design 3" },
    { src: "/images/image-5.png", alt: "Design 5" },
    { src: "/images/image-7.png", alt: "Design 4" },
    { src: "/images/image-6.png", alt: "Design 6" },
    { src: "/images/image-9.png", alt: "Design 7" },
    { src: "/images/image-4.png", alt: "Design 8" },
    { src: "/images/image-8.png", alt: "Design 9" }
  ];
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Vee</title>${renderHead()}</head> <body> <main class="font-jetbrains mx-auto max-w-[800px] overflow-x-hidden px-6 py-24 md:overflow-x-visible"> <div> ${renderComponent($$result, "ShadedBox", $$ShadedBox, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ` })} <div class="pt-16"> ${renderComponent($$result, "Box", $$Box, { "label": "Experience" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Experience", $$Experience, {})} ` })} </div> <div class="pt-16"> ${renderComponent($$result, "Box", $$Box, { "label": "Projects" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Projects", $$Projects, {})}` })} </div> <div class="pt-16"> ${renderComponent($$result, "Box", $$Box, { "label": "Community Work" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Community", $$Community, {})}` })} </div> <div class="pt-16"> ${renderComponent($$result, "ShadedBox", $$ShadedBox, { "label": "Community is Love" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Design", Design, { "designImages": designImages, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/vee/Documents/Portfolios/portfolio_v2/src/components/util/image-dialog.tsx", "client:component-export": "default" })} ` })} </div> </div> </main> </body></html>`;
}, "/home/vee/Documents/Portfolios/portfolio_v2/src/pages/index.astro", undefined);

const $$file = "/home/vee/Documents/Portfolios/portfolio_v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
