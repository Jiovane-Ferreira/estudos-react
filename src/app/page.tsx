import {Square, Circle} from '@/components/Geo';

function Pagina() {
  return (

    <div className="container mx-auto">

      <div className="flex gap-2 justify-center">

        <div className="rounded-md bg-blue-500 text-white p-4">1</div>
        <div className="rounded-md bg-blue-500 text-white p-4">2</div>
        <div className="rounded-md bg-blue-500 text-white p-4">3</div>
        <div className="rounded-md bg-blue-500 text-white p-4">4</div>

        <Square/>
        <Circle />

      </div>

    </div>
  
  );
}

export default Pagina;