import React from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from '../../material-tailwind';

export function TermsOfService() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        &nbsp;Terms and Conditions
      </Button> */}
      <a
        href="#"
        onClick={handleOpen}
        className="font-medium transition-colors hover:text-red-500 text-gray-300"
      >
        &nbsp;Terms and Conditions
      </a>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 }
        }}
      >
        <DialogHeader>Terms of Service</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Nemo officia tempora animi
          illo autem exercitationem repellat laborum obcaecati porro ipsa!
          Adipisci provident amet nisi optio ratione, ducimus error illo!
          Voluptatem. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Praesentium nemo minus quia repellendus ea odio, vitae cupiditate
          animi architecto natus aspernatur, quasi minima provident
          necessitatibus voluptatum fuga doloribus quaerat nam eos dicta cumque
          est? Facere illum sint, iste placeat quos doloribus natus! Dolore, cum
          officia. Quasi eum pariatur repellat. Sed totam dicta officiis
          voluptatum magni numquam a porro aliquid exercitationem quisquam
          reprehenderit, temporibus iste incidunt impedit sunt adipisci? Ut
          similique neque assumenda, doloremque amet sunt doloribus iusto
          numquam aliquid unde explicabo nihil blanditiis suscipit in adipisci
          voluptas fugiat quis laborum natus beatae? Quisquam ut totam
          accusantium, itaque culpa amet nostrum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Pariatur atque hic excepturi
          consequuntur quas qui, enim dolor natus iste exercitationem doloribus
          veritatis sint reiciendis earum praesentium, quisquam odio tempore
          dolorum alias. Odio laudantium aperiam labore nostrum in! Velit sunt
          illum, maxime optio voluptates voluptatem. Dolor harum vitae deleniti
          inventore dicta beatae, repudiandae eaque commodi dolore corporis illo
          laboriosam natus quis odit recusandae nemo fugiat tempora repellat.
          Ipsum, nihil dolore. Ullam corporis hic, impedit saepe modi delectus
          atque minus, ex adipisci et vitae dignissimos excepturi corrupti sint.
          Maxime laborum tenetur voluptatibus eius laboriosam deleniti, possimus
          ex ea fuga beatae laudantium in maiores quibusdam labore ratione. Sint
          eos deserunt suscipit aperiam minima, aliquid consequuntur ducimus,
          similique, velit nihil eaque esse. Facilis deserunt minus commodi
          iusto, unde, magnam quaerat iure natus rerum saepe esse optio, sunt
          deleniti quasi repellat itaque ullam eos quia necessitatibus
          perferendis veritatis accusamus alias facere omnis! Animi velit,
          pariatur saepe necessitatibus esse numquam. Perspiciatis modi ea,
          veritatis corrupti, fugiat dicta expedita aspernatur itaque commodi
          vero ad ullam? Porro assumenda corrupti alias amet! Explicabo vel
          dicta harum at architecto facere iusto repellendus nemo? Sit modi nisi
          ipsa ipsum voluptates. Velit, ab delectus alias recusandae
          reprehenderit quaerat dolorum itaque fuga aut!
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
