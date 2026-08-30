import { PageHero } from "@/components/common/page-hero";
import { BookingForm } from "@/components/forms/booking-form";
import { pageMetadata } from "@/config/seo";

export const metadata=pageMetadata("Book a Pet Care Visit","Request a Paw District grooming, daycare, boarding or wellness appointment","/book");
export default function BookPage(){return <><PageHero eyebrow="Start a booking" title="Tell us about their kind of day." copy="Five short steps. Useful details. A human confirmation from Paw District before anything is final." breadcrumbs={[{label:"Book a visit"}]} accent="bg-sun"/><section className="container-shell pb-24 md:pb-32"><BookingForm/></section></>}
