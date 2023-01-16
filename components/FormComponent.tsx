export default function FormComponent() {
  return (
    <form className="h-screen overflow-scroll p-5 flex flex-col gap-3">
      <div>
        <h2 className="text-lg font-bold">Personal Information</h2>
        <label>Name</label>
        <input
          placeholder="e.g. John Doe"
          name="name"
          className="p-2 border rounded-md w-full"
        />
      </div>
      <div>
        <h2 className="text-lg font-bold">Educations</h2>
        <label>School Name</label>
        <input
          placeholder="e.g. Harvard University"
          className="p-2 border rounded-md w-full"
        />
        <label>Description</label>
        <textarea
          placeholder="Description"
          className="p-2 border rounded-md w-full"
        />
      </div>
      <div>
        <h2 className="text-lg font-bold">Work Exprerience</h2>
        <label>Company Name</label>
        <input
          placeholder="e.g. Google"
          className="p-2 border rounded-md w-full"
        />
        <label>Job Title</label>
        <input
          placeholder="e.g. Software Engineer"
          className="p-2 border rounded-md w-full"
        />
        <label>Description</label>
        <textarea
          placeholder="Description"
          className="p-2 border rounded-md w-full"
        />
      </div>
      <div>
        <h2 className="text-lg font-bold">Projects</h2>
        <label>Project Name</label>
        <input
          placeholder="e.g. My Portfolio Website"
          className="p-2 border rounded-md w-full"
        />
        <label>Description</label>
        <textarea
          placeholder="Description"
          className="p-2 border rounded-md w-full"
        />
      </div>
      <div>
        <h2 className="text-lg font-bold">Interests</h2>
        <label>Interest</label>
        <input
          placeholder="e.g. Listen to music"
          className="p-2 border rounded-md w-full"
        />
      </div>
    </form>
  );
}
