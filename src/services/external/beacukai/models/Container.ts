/* eslint-disable camelcase */
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class ExtBcContainer {
  @Field()
  // eslint-disable-next-line @typescript-eslint/naming-convention
  container_size: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  pelabuhan_bongkar?: string;

  @Field()
  // eslint-disable-next-line @typescript-eslint/naming-convention
  bl_no: string;

  @Field()
  // eslint-disable-next-line @typescript-eslint/naming-convention
  seriContainer: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  pelabuhan_akhir?: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  noSeal?: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  pelabuhan_transit?: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  nama_shipper?: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  nama_sarana_pengangkut?: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  pelabuhan_asal?: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  pelabuhan_berikut?: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  pelabuhan_muat?: string;

  @Field()
  // eslint-disable-next-line @typescript-eslint/naming-convention
  bl_date: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  notify_penerima?: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  no_voyage?: string;

  @Field()
  // eslint-disable-next-line @typescript-eslint/naming-convention
  container_no: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  jenisMuat?: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  container_type?: string;

  @Field({ nullable: true })
  // eslint-disable-next-line @typescript-eslint/naming-convention
  consignee_pemilik?: string;
}
