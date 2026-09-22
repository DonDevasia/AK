import BirthdayExperience from "@/components/BirthdayExperience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-[430px] sm:max-w-[800px] relative mx-auto h-[750px] sm:h-[600px] border-scrapbook shadow-scrapbook bg-paper overflow-hidden">
        <BirthdayExperience />
      </div>
    </main>
  );
}
