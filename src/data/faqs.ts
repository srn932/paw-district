export const faqGroups: { category: string; items: { question: string; answer: string }[] }[] = [
  { category: "General", items: [
    { question: "Do I need an appointment?", answer: "Calling or messaging first helps us plan the right team, space and time for your pet. Speak with us for current availability." },
    { question: "Where is The Paw District?", answer: "You will find us at No. 20/4A1A3, Mappedu Road, Alapakkam - Nedunkundram, Chennai, Tamil Nadu 600063." },
    { question: "What vaccinations are required?", answer: "Requirements vary by activity, age and veterinary guidance. We share the current checklist before your pet joins us; your veterinarian should confirm what is appropriate." },
    { question: "What happens if my pet becomes unwell?", answer: "We call you promptly, follow the agreed emergency plan and seek qualified veterinary care when needed." },
  ]},
  { category: "Boarding", items: [
    { question: "Do you offer care during the day?", answer: "Yes. Supervised daytime care is included within Boarding rather than treated as a separate programme. It balances play, enrichment, meals when needed and rest." },
    { question: "How do you introduce new dogs?", answer: "Through calm observation and controlled introductions. We consider play style, energy, confidence and boundaries before choosing companions." },
    { question: "What should I bring for an overnight stay?", answer: "Bring labelled food, medication, written care notes and one safe comfort item. We confirm the final checklist before arrival." },
    { question: "Can you follow my pet's feeding schedule?", answer: "Yes. Share portions, timing and preparation details clearly before the stay." },
    { question: "Will I receive updates?", answer: "Yes. Updates focus on meals, mood, play and rest so you know how the stay is going." },
    { question: "Can senior pets stay?", answer: "Often, yes—but suitability depends on mobility, medication, stress and health needs. We review this before confirming care." },
  ]},
  { category: "Grooming", items: [
    { question: "How often should my dog be groomed?", answer: "Coat type, shedding, lifestyle and skin needs all matter. Many dogs visit every four to eight weeks, but we suggest a rhythm after meeting your pet." },
    { question: "Do you groom cats?", answer: "Yes, with appointments planned around feline comfort and handling needs." },
    { question: "Can I request a particular haircut?", answer: "Yes. Bring a reference if you have one and we will explain what is practical for the current coat condition and comfort." },
  ]},
  { category: "Training", items: [
    { question: "What age can training begin?", answer: "Gentle foundations can begin early. The setting and exercises should match age, confidence, vaccination guidance and previous experience." },
    { question: "Do you offer puppy training?", answer: "Yes. Puppy foundations can include settling, handling, lead introductions, recall, name response and everyday home routines." },
    { question: "Can training fix every behaviour?", answer: "No outcome can be responsibly guaranteed. Progress depends on the dog, health, history, environment and consistent practice at home." },
    { question: "Will I learn how to practise at home?", answer: "Yes. Pet-parent coaching is central to the programme so cues and routines remain consistent outside the District." },
  ]},
  { category: "Regular care", items: [
    { question: "Do I need a membership to use Paw District?", answer: "No. You can contact us about boarding, grooming or training whenever you need help." },
    { question: "How can I ask about regular care?", answer: "Call +91 73389 00239, message us on WhatsApp or use the enquiry form on the Visit the District page." },
  ]},
];

export const allFaqs = faqGroups.flatMap((group) => group.items);
