
import { NewAnnouncement, Announcement } from './index';

export const HomeCenterColumn = () => {
  return (
    <section className="col-span-2 mb-5 max-w-xl">

        {/* Create an announcement */}
        <NewAnnouncement />

        {/* announcements */}
        <Announcement />
    </section>
  )
}
