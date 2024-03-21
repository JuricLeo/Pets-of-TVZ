import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return ( 
    <div>
      <form className="space-y-8 pt-40">
        <div className="flex space-x-6">
          <div className="flex flex-col flex-1 space-y-2">
            <label htmlFor="name" className="text-white/30">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Oli"
              required
              className="rounded-md bg-slate-800 p-6"
            />
          </div>
          <div className="flex flex-col flex-1 space-y-2">
            <label htmlFor="species" className="text-white/30">
              Species
            </label>
            <input
              type="text"
              name="species"
              placeholder="Dog"
              required
              className="rounded-md bg-slate-800 p-6"
            />
          </div>
        </div>
        <div className="flex space-x-6">
          <div className="flex flex-col flex-1 space-y-2">
            <label htmlFor="age" className="text-white/30">
              Age
            </label>
            <input
              type="number"
              name="age"
              placeholder="10"
              required
              className="rounded-md bg-slate-800 p-6"
            />
          </div>
          <div className="flex flex-col flex-1 space-y-2">
            <label htmlFor="color" className="text-white/30">
              Color
            </label>
            <input
              type="text"
              name="color"
              placeholder="White"
              required
              className="rounded-md bg-slate-800 p-6"
            />
          </div>
        </div>
        <div className="flex space-x-6">
          <div className="flex flex-col flex-1 space-y-2">
            <label htmlFor="Food" className="text-white/30">
              Favorite Food
            </label>
            <input
              type="text"
              name="favoriteFood"
              placeholder="Sausage"
              required
              className="rounded-md bg-slate-800 p-6"
            />
          </div>
          <div className="flex flex-col flex-1 space-y-2">
            <label htmlFor="Activity" className="text-white/30">
              Favorite Activity
            </label>
            <input
              type="text"
              name="favoriteActivity"
              placeholder="Sleeping"
              required
              className="rounded-md bg-slate-800 p-6"
            />
          </div>
        </div>
        <Button
          type="submit"
          className="flex ml-auto bg-sky-700 hover:bg-sky-600"
        >
          Add
        </Button>
      </form>
    </div>
  );
}
 
export default ContactPage;