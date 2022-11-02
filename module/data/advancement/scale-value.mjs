import { IdentifierField } from "../fields.mjs";

export default class ScaleValueConfigurationData extends foundry.abstract.DataModel {
  static defineSchema() {
    return {
      identifier: new IdentifierField({required: true, label: "DND5E.Identifier"}),
      type: new foundry.data.fields.StringField({
        required: true, initial: "string", label: "DND5E.AdvancementScaleValueTypeLabel"
      }),
      distance: new foundry.data.fields.SchemaField({
        units: new foundry.data.fields.StringField({required: true, label: "DND5E.MovementUnits"})
      }),
      // TODO: Switch to MappingField with custom type with #1688
      scale: new foundry.data.fields.ObjectField({required: true})
    };
  }
}
