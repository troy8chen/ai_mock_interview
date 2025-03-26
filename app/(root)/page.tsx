import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg mx-auto"> 
          <h2>
            Get Interview Ready with AI-Powered Practice & Feedback
          </h2>
          <p className="text-lg">
            Practice on real interview questions and get instant feedback
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Started an Interview</Link>
          </Button>
        </div>
        <Image src="/robot.png" alt="robot" width={400} height={400} className="max-sm:hidden" />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>
          Your Intervew
        </h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
          <p>You haven&apos;t taken any interviews yet</p>
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          <p>There are no interviews available</p>
        </div>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview} />
          ))}
        </div>
      </section>
    </>
    
  )
};

export default Page;
