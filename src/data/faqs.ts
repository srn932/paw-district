export const faqGroups: { category: string; items: { question: string; answer: string }[] }[] = [
  { category: "General", items: [
    { question: "Do I need an appointment?", answer: "Appointments help us plan the right team, space and time for your pet. Contact us first for same-day availability." },
    { question: "What vaccinations are required?", answer: "Requirements vary by service, age and local veterinary guidance. We will share the current checklist before your visit; your veterinarian should confirm what is appropriate for your pet." },
    { question: "What happens if my pet becomes unwell?", answer: "We contact you promptly, follow the agreed emergency plan and seek qualified veterinary care when needed." },
  ]},
  { category: "Grooming", items: [
    { question: "How often should my dog be groomed?", answer: "Coat type, shedding, lifestyle and skin needs all matter. Many dogs visit every four to eight weeks, but we suggest a rhythm after meeting your pet." },
    { question: "Do you groom cats?", answer: "Yes, with appointments planned around feline comfort and handling needs." },
  ]},
  { category: "Daycare", items: [
    { question: "How do you introduce new dogs to daycare?", answer: "Through a calm assessment and controlled introductions. We look at play style, confidence and boundaries before choosing a group." },
    { question: "Does daycare include rest?", answer: "Yes. Good daycare includes proper downtime, not non-stop stimulation." },
  ]},
  { category: "Boarding", items: [
    { question: "What should I bring for boarding?", answer: "Bring labelled food, medication, written instructions and one safe comfort item. We confirm the final checklist before arrival." },
    { question: "Can you follow my pet's feeding schedule?", answer: "Yes. Share portions, times and preparation details clearly at booking." },
    { question: "Will I receive updates during boarding?", answer: "Yes. Updates focus on mood, meals, rest and useful moments from the day." },
    { question: "Can senior pets stay at Paw District?", answer: "Often, yes—but suitability depends on mobility, medication, stress and health needs. We review this before confirming a stay." },
  ]},
  { category: "Wellness", items: [
    { question: "Do wellness visits replace my veterinarian?", answer: "No. Wellness support does not replace diagnosis or treatment from a qualified veterinarian." },
    { question: "Can you help with puppy and kitten routines?", answer: "Yes. We can help you think through care routines and prepare useful questions for your veterinarian." },
  ]},
  { category: "Bookings", items: [
    { question: "Can I change my booking?", answer: "Yes, subject to availability. Contact us as early as possible so we can find a better time." },
    { question: "How will my appointment be confirmed?", answer: "A booking request is confirmed only after the Paw District team contacts you. Submitting the website form does not reserve a slot automatically." },
  ]},
];

export const allFaqs = faqGroups.flatMap((group) => group.items);
