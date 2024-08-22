import React, { Component } from "react";
import "./../App.css";
import logoRelease from "./Code wiki_files/placeholder";

class ReleasenoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileStructure: {},
      fileReferences: {},
      fileContent: "",
      filetitle: "",
    };
  }

  handleFileChange = (fileStructure, fileReferences) => {
    this.setState({ fileStructure, fileReferences });
  };

  handleFileClick = (fileContent, filetitle, file) => {
    filetitle = "File : " + filetitle;
    this.setState({ fileContent, filetitle, file });
  };

  render() {
    return (
      <div className="contain">
        <div className="row">
          <h2>Release note - 9.0.4</h2>
        </div>
        <div className="row">
          <h3>Defect</h3>
          <ul>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-6254"
              >
                DIAGBOX-6254
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="9f94f5b7-4612-4d4b-8a54-aeb0e6d80c77"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />
              <span>
                &nbsp;POUDG 10377 / IMPORT D2C - DIAG_JOB - Demande d'ajout du
                support du job "ECU_GEN_UDS_CVM_SEA_620.xml"
              </span>
            </li>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-6065"
              >
                DIAGBOX-6065
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="4ed40b52-9248-43de-9a85-f110361a3e90"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />{" "}
              Corriger le type complexe "
              FamilyDPDU_ISO_15765_3_on_ISO_15765_2Type"
            </li>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-6063"
              >
                DIAGBOX-6063
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="488f5d41-f921-48c3-93e1-a0b141086b65"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />{" "}
              POUDG 10268 / IMPORT D2C - DAC - Requête JIRA non enregistrée
            </li>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-6054"
              >
                DIAGBOX-6054
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="0140c3a3-3107-4dc6-8854-299736765999"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />{" "}
              Fautes d'orthographe dans le message d'erreur "Jira 21" du Log
              Viewer
            </li>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-5992"
              >
                DIAGBOX-5992
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="77dd9de0-dbe2-4534-b586-a3b3bbaf5605"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />{" "}
              POUDG 10238 / IMPORT D2C - DAS - DTCs absents du XML mais présents
              dans le XLS
            </li>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-5844"
              >
                DIAGBOX-5844
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="5b825c17-4eae-48d7-8627-20b6193caf9d"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />{" "}
              POUDG 10198 / POUDG 9959 (part 2) / ID_NOM_DU_FOURNISSEUR - IMPORT
              D2C - DO - Pas d'import des paramètres d'identification
            </li>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-3722"
              >
                DIAGBOX-3722
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="dc867225-1eb0-4c7a-b9fb-33dd1a67b099"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />
              <span>
                &nbsp;Message d'erreur pour une mauvaise authentification
              </span>
            </li>
          </ul>
        </div>
        <div className="row">
          <h3>Change Request</h3>
          <ul>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-6239"
              >
                DIAGBOX-6239
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="b3aaf371-1a98-475e-a746-1423d961c9f7"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />{" "}
              DAC - POUDG 10322 / Tester la gestion d'une arborescence de
              Répertoires/Fichiers DPIDE dans D2CFD
            </li>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-6197"
              >
                DIAGBOX-6197
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="2f2406b9-867c-4c77-a179-49023f4f3130"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />{" "}
              DAC : DE_1552 - Add the eDPEO Battery Test to the PDI/PVN (New
              Vehicle Preparation) function
            </li>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-6103"
              >
                DIAGBOX-6103
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="6e8aee6b-290d-4561-912d-19004403c48c"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />{" "}
              Modification de la version des plugins 9.0.4
            </li>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-6034"
              >
                DIAGBOX-6034
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="9f941f4e-01e5-4fdd-9ed6-93a664fbd4ec"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />
              &nbsp;POUDG 10264 / ouverture du fichier ident suite à un import
              impossible
            </li>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-6010"
              >
                DIAGBOX-6010
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="3fbab2c5-99e4-4e62-978c-908c5ed28247"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />
              <span>
                &nbsp;DAC : MCA24 new reflash procedures - for
                cost/delay/feasibility evalution
              </span>
            </li>
            <li>
              <a
                class="external-link"
                href="https://jira.actia.se/browse/DIAGBOX-5741"
              >
                DIAGBOX-5741
              </a>
              <img
                class="editor-inline-macro"
                height="18"
                width="88"
                src={logoRelease}
                data-macro-name="status"
                data-macro-id="a655ca41-d83d-4f9b-9704-8c52ee356f9c"
                role="button"
                tabindex="0"
                aria-haspopup="true"
                aria-label="Closed status macro"
                data-macro-parameters="colour=success|subtle=true|title=Closed"
                data-macro-schema-version="1"
              />{" "}
              POUDG 10019 - POUDG-10120 / Le fichier
              Template_ISO_14229_3_on_ISO_15765_2 (xml/cfg) ne permet pas de
              gérer des mnémoniques avec plusieurs définitions
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ReleasenoteView;
