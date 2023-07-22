import JobDetailCard from "@/components/JobDetailCard";

const JobDetails = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <JobDetailCard jobID={params.id} />
    </div>
  );
};

export default JobDetails;
