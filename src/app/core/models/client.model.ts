/**
 * Interface representing a client or business partner.
 */
export interface Client {
  /** Name of the client company or organization */
  name: string;
  /** Path to the client's logo image in the public assets directory */
  logo: string;
  /** Accessibility alternative text for the logo image */
  alt: string;
}
