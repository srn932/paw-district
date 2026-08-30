import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "boarding",
    name: "Boarding",
    kicker: "Stay · Play · Snooze",
    headline: "Sleepovers, upgraded.",
    intro: "Comfortable overnight stays and balanced day boarding, built around familiar routines, supervised play and proper rest.",
    description: "Thoughtful dog and cat boarding in Chennai, including supervised daytime care, feeding routines, play, rest and clear pet-parent updates.",
    color: "bg-mint",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1600&q=85",
    imagePosition: "50% 46%",
    features: ["Overnight boarding", "Supervised day boarding", "Comfortable suites", "Familiar feeding routines", "Balanced play & rest", "Medication notes", "Photo updates", "Gentle first-day introductions"],
    flow: [
      { title: "Plan their stay", text: "We collect feeding notes, comfort cues, play style, health details and emergency contacts before arrival." },
      { title: "Settle in gently", text: "Every new guest gets time to sniff, observe and meet suitable companions through controlled introductions." },
      { title: "Balance every day", text: "Supervised play, enrichment, meals, quiet time and sleep follow a calm rhythm with useful updates for you." },
    ],
    faqs: [
      { question: "Do you offer care during the day?", answer: "Yes. Day boarding sits within our Boarding programme and includes supervised activity, appropriate social time, meals when required and proper rest." },
      { question: "What should I bring for an overnight stay?", answer: "Bring labelled food, current medication, clear care instructions and one safe comfort item. We confirm the final checklist before arrival." },
      { question: "How do you introduce a new dog?", answer: "Slowly. We begin with observation and controlled introductions, then choose companions based on size, energy, confidence and play style." },
      { question: "Will I receive updates?", answer: "Yes. We share useful notes about meals, play, rest and mood so you know how their stay is going." },
      { question: "Can senior pets stay?", answer: "Many can. We first review mobility, medication, health needs and stress levels to decide whether our environment is a comfortable fit." },
    ],
  },
  {
    slug: "grooming",
    name: "Grooming",
    kicker: "Bath · Brush · Bounce",
    headline: "Fresh coat. Fresh mood.",
    intro: "No rushed trims. No one-style-fits-all cuts. Grooming should work with your pet's coat, comfort and temperament.",
    description: "Professional dog and cat grooming in Chennai, from bath-and-brush care to coat-specific trims, de-shedding and gentle spa add-ons.",
    color: "bg-peach",
    image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&w=1600&q=85",
    imagePosition: "50% 38%",
    features: ["Dog grooming", "Cat grooming", "Bath & brush", "Haircut & trim", "Nail care", "Ear cleaning", "De-shedding", "Coat-specific care & spa add-ons"],
    flow: [
      { title: "A calm hello", text: "We ask about coat history, routines, sensitivities and what a comfortable groom looks like for your pet." },
      { title: "A plan for their coat", text: "We agree on the groom and set honest expectations before the bath, brush or trim begins." },
      { title: "A considered groom", text: "Breaks, handling and tools are adjusted around body language and comfort—not a stopwatch." },
    ],
    faqs: [
      { question: "How often should my dog be groomed?", answer: "It depends on coat type, lifestyle and skin needs. Many dogs benefit from professional care every four to eight weeks; we can suggest a sensible rhythm after meeting them." },
      { question: "Do you groom cats?", answer: "Yes. Cat appointments are planned separately and handled around feline comfort. Tell us about temperament and previous grooming experiences when you call." },
      { question: "Can I choose the haircut?", answer: "Absolutely. Bring a reference if you have one. We will explain what is practical for the current coat condition and your pet's comfort." },
    ],
  },
  {
    slug: "training",
    name: "Training",
    kicker: "Clear cues · Calmer days",
    headline: "Good habits, built together.",
    intro: "Practical dog training for real homes—clear communication, kind repetition and skills that make everyday life easier.",
    description: "Professional dog training in Chennai for puppy foundations, obedience, leash skills, recall, social confidence and pet-parent coaching.",
    color: "bg-sun",
    image: "https://images.unsplash.com/photo-1551730459-92db2a308d6a?auto=format&fit=crop&w=1600&q=85",
    imagePosition: "50% 44%",
    features: ["Puppy foundations", "Basic obedience", "Leash skills", "Recall practice", "Social confidence", "One-to-one guidance", "Pet-parent coaching", "Everyday behaviour support"],
    flow: [
      { title: "Understand the pattern", text: "We start with age, history, home routine, triggers and the behaviour you want to change or strengthen." },
      { title: "Build useful skills", text: "Training focuses on clear cues, manageable steps and rewards your dog genuinely values." },
      { title: "Practise at home", text: "You receive realistic exercises and guidance, because progress depends on what happens between sessions too." },
    ],
    faqs: [
      { question: "What age can training begin?", answer: "Gentle foundation work can begin early. The right setting and exercises depend on age, vaccination guidance, confidence and previous experience." },
      { question: "Do you offer puppy training?", answer: "Yes. Puppy work can cover handling, name response, recall foundations, lead introductions, settling and everyday home routines." },
      { question: "Can you guarantee a behaviour will be fixed?", answer: "No responsible trainer should guarantee an outcome. Progress depends on the dog, the behaviour's history, health, environment and consistent practice at home." },
      { question: "Will pet parents be involved?", answer: "Yes. Training works best when the people at home understand the cues, timing and practice plan." },
    ],
  },
];

export const featuredServices = services;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
