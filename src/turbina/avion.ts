export function crearAvion(): string {
  const helice = new Helice(3);
  const trenAterrizaje = new TrendeAterrizaje(2, 3, true);
  const alas = new Alas(2, 3);
  const cubierta = new Cubierta(true, true, true, 4, 4);
  const aeroplano = new Aeroplano(helice, trenAterrizaje, alas, cubierta);
  return aeroplano.ToString();
}

export class Helice {
  constructor(private numHelices: number) {}
  public ToString() {
    return this.numHelices + " hélice/s\n";
  }
}

export class TrendeAterrizaje {
  constructor(
    private numNeumaticos: number,
    private numAmortiguadores: number,
    private fijoRetractil: boolean
  ) {}
  public ToString() {
    let mensaje = "Tren de Aterrizaje compuesto por: ";
    if (this.fijoRetractil) mensaje += "con Retráctil fijo, ";
    mensaje +=
      this.numNeumaticos +
      " neumáticos, " +
      this.numAmortiguadores +
      " amortiguadores\n";
    return mensaje;
  }
}

export class Alas {
  constructor(private numAlasFrente: number, private numAlasCola: number) {}
  public ToString() {
    return (
      "Alas Frontales: " +
      this.numAlasFrente +
      " Alas Posteriores: " +
      this.numAlasCola +
      "\n"
    );
  }
}

export class Cubierta {
  constructor(
    private cabinaTripulacion: boolean,
    private cabinaVuelo: boolean,
    private sistemaEmergencia: boolean,
    private numTanquesCombustible: number,
    private numPuertasSalidas: number
  ) {}

  public ToString() {
    let mensaje = "Cubierta compuesta de:";
    if (this.cabinaVuelo) mensaje += " Cabina de Vuelo,";
    if (this.cabinaTripulacion) mensaje += " Cabina de Tripulación,";
    if (this.sistemaEmergencia) mensaje += " Sistema de Emergencia,";
    mensaje +=
      " " +
      this.numTanquesCombustible +
      " Tanques de Combustible, " +
      this.numPuertasSalidas +
      " Puertas de Salida.\n";
    return mensaje;
  }
}

class Aeroplano {
  constructor(
    private helice: Helice,
    private trenAterrizaje: TrendeAterrizaje,
    private alas: Alas,
    private cubierta: Cubierta
  ) {}

  public ToString() {
    return (
      "Aeroplano compuesto por:\n" +
      this.helice.ToString() +
      this.alas.ToString() +
      this.trenAterrizaje.ToString() +
      this.cubierta.ToString()
    );
  }
}
