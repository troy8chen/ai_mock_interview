import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser, getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/auth.action";


const Page = async () => {
  const user = await getCurrentUser();
  const [userInterviews, allInterviews] = await Promise.all([
    getInterviewsByUserId( user?.id! ),
    getLatestInterviews({ userId: user?.id! })
  ]);

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = allInterviews?.length > 0;

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
        { 
            hasPastInterviews ? (
              userInterviews?.map((interview) => (
                <InterviewCard key={interview.id} {...interview} />
              ))) : (
                <p>You haven&apos;t taken any interviews yet</p>
              )
          }
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {
            hasUpcomingInterviews ? (
              allInterviews?.map((interview) => (
                <InterviewCard key={interview.id} {...interview} />
              ))) : (
                 <p>there are no new interviews available</p>
            )
          }
        </div>
      </section>
    </>
    
  )
};

export default Page;
