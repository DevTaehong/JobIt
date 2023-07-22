import JobDetailCard from "@/components/JobDetailCard";

const JobDetails = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <JobDetailCard qualifications={["2, ", "1"]} />
    </div>
  );
};

export default JobDetails;
